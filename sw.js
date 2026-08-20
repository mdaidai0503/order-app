const CACHE='order-app-v2-4-1-backup-read-fix-20260821';
const ASSETS=['./','./index.html','./manifest.webmanifest','./発注先マスター_雛形.xlsx','./発送先マスター_雛形.xlsx','./商品マスター_雛形.xlsx','./発注先発送先組合せ_雛形.xlsx','./発注アプリ_マスター一括登録_統合雛形.xlsx'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin) return;
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
