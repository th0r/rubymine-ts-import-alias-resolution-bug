async function app() {
  const SomeClass = await import('./some-class').then(m => m.SomeClass);
  const cls = new SomeClass();
  console.log(cls);
}


