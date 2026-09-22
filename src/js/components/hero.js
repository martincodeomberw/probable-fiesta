export function Hero({ name = '', role = '', summary = '' } = {}) {
  return `
    <div class="hero">
      <h1>${name}</h1>
      <p>${role}</p>
      <p>${summary}</p>
    </div>
  `;
}
