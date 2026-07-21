/* KILL-SWITCH: este service worker não intercepta nem cacheia nada.
   Ele apaga todos os caches antigos e se desregistra sozinho,
   liberando o navegador pra sempre pegar a versão mais nova do app. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const nomes = await caches.keys();
      await Promise.all(nomes.map(n => caches.delete(n)));
    } catch (e) {}
    try { await self.registration.unregister(); } catch (e) {}
    const clientes = await self.clients.matchAll({ type: 'window' });
    clientes.forEach(c => { try { c.navigate(c.url); } catch (e) {} });
  })());
});
/* sem 'fetch' listener de propósito: nada é interceptado */
