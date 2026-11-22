"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "compress" | "resize" | "signature";
export default function ImageTool() {
  const [mode,setMode] = useState<Mode>("compress");
  const [file,setFile] = useState<File|null>(null);
  const [preview,setPreview] = useState("");
  const [width,setWidth] = useState(400);
  const [height,setHeight] = useState(600);
  const [quality,setQuality] = useState(75);
  const [format,setFormat] = useState<"image/jpeg"|"image/png"|"image/webp">("image/jpeg");
  const [whiteBg,setWhiteBg] = useState(true);
  const [busy,setBusy] = useState(false);
  const [message,setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement|null>(null);

  useEffect(()=>{ if(!file){setPreview("");return;} const url=URL.createObjectURL(file); setPreview(url); return ()=>URL.revokeObjectURL(url); },[file]);
  function choose(f:File|undefined){ if(!f)return; if(!f.type.startsWith("image/")){setMessage("Please choose an image file.");return;} setFile(f);setMessage(""); }
  async function processImage(){
    if(!file||!preview)return;
    setBusy(true);setMessage("");
    try{
      const img=new Image(); img.src=preview; await img.decode();
      let w=img.naturalWidth,h=img.naturalHeight;
      if(mode==="resize"||mode==="signature"){w=Math.max(1,Math.round(width));h=Math.max(1,Math.round(height));}
      const canvas=document.createElement("canvas");canvas.width=w;canvas.height=h;
      const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Canvas is unavailable.");
      if(mode==="signature"&&whiteBg){ctx.fillStyle="#fff";ctx.fillRect(0,0,w,h);}
      ctx.drawImage(img,0,0,w,h);
      const mime=mode==="compress"?format:"image/png";
      const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,mime,mode==="compress"?quality/100:1));
      if(!blob)throw new Error("Could not process this image.");
      const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;
      const ext=mime==="image/jpeg"?"jpg":mime==="image/webp"?"webp":"png";
      a.download=(file.name.replace(/\.[^.]+$/,"")||"image")+"-"+mode+"."+ext;a.click();URL.revokeObjectURL(url);
      setMessage("Your processed image has been downloaded.");
    }catch(e){setMessage(e instanceof Error?e.message:"Something went wrong.");}
    finally{setBusy(false);}
  }
  const modes:[Mode,string,string][]=[["compress","Compress Image","Reduce file size"],["resize","Resize Image","Passport photo default: 400 × 600 px"],["signature","Signature Resizer","Prepare form signatures"]];
  return <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
    <div className="mb-8 text-center"><p className="text-sm font-bold uppercase tracking-widest text-blue-600">All-in-one image utility</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Make images fit your needs</h1><p className="mx-auto mt-3 max-w-2xl text-slate-600">Compress, resize photos or prepare signature images in one simple tool. Your files stay on your device.</p></div>
    <div className="mb-5 grid gap-3 sm:grid-cols-3">{modes.map(([id,title,desc])=><button key={id} onClick={()=>{setMode(id);setWidth(id==="signature"?300:400);setHeight(id==="signature"?100:600);setMessage("");}} className={`rounded-2xl border p-4 text-left transition ${mode===id?"border-blue-600 bg-blue-50 ring-2 ring-blue-100":"border-slate-200 bg-white hover:border-blue-300"}`}><span className="block font-bold">{title}</span><span className="mt-1 block text-sm text-slate-500">{desc}</span></button>)}</div>
    <div className="tool-panel p-5 sm:p-8">
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={e=>choose(e.target.files?.[0])}/>
      <button type="button" onClick={()=>inputRef.current?.click()} className="drop-zone flex min-h-44 w-full flex-col items-center justify-center rounded-2xl p-6 text-center"><span className="text-lg font-bold text-slate-800">{file?file.name:"Choose an image to get started"}</span><span className="mt-2 text-sm text-slate-500">Tap to upload · JPG, PNG, WebP</span></button>
      {preview&&<div className="mt-5 flex flex-col items-center gap-3"><img ref={imageRef} src={preview} alt="Selected image preview" className="max-h-56 max-w-full rounded-xl border border-slate-200 object-contain"/><span className="text-xs text-slate-500">{file?.type} · {((file?.size||0)/1024).toFixed(1)} KB</span></div>}
      {mode==="compress"&&<div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Image quality: {quality}%<input className="mt-3 block w-full" type="range" min="10" max="100" value={quality} onChange={e=>setQuality(Number(e.target.value))}/></label><label className="text-sm font-semibold">Output format<select className="mt-2 block w-full rounded-xl border border-slate-300 p-3" value={format} onChange={e=>setFormat(e.target.value as typeof format)}><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select></label></div>}
      {(mode==="resize"||mode==="signature")&&<div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Width (px)<input className="mt-2 block w-full rounded-xl border border-slate-300 p-3" type="number" min="1" max="10000" value={width} onChange={e=>setWidth(Number(e.target.value))}/></label><label className="text-sm font-semibold">Height (px)<input className="mt-2 block w-full rounded-xl border border-slate-300 p-3" type="number" min="1" max="10000" value={height} onChange={e=>setHeight(Number(e.target.value))}/></label>{mode==="signature"&&<label className="flex items-center gap-2 text-sm sm:col-span-2"><input type="checkbox" checked={whiteBg} onChange={e=>setWhiteBg(e.target.checked)}/> Add white background</label>}</div>}
      <button disabled={!file||busy} onClick={processImage} className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">{busy?"Processing…":mode==="compress"?"Compress & Download":mode==="resize"?"Resize & Download":"Prepare Signature & Download"}</button>
      {message&&<p role="status" className="mt-4 text-center text-sm text-slate-700">{message}</p>}
    </div>
    <p className="mt-5 text-center text-xs text-slate-500">Privacy note: image processing happens locally in your browser; files are not sent to our server.</p>
  </section>;
}
