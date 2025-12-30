export default function Home() {
  return (
    <div className="container">
      <div className="animate-bounce text-64 balloon">🎈</div>

      <h1>The coin that only goes up!</h1>
      <div className="tagline">Fueled by helium. Powered by belief.</div>

      <div className="contract">
        <strong className="text-black">Contract Address</strong>
        <br />
        <p className="text-black/30">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
      </div>

      <div className="buttons">
        <a
          className="btn btn-primary flex items-center justify-center"
          href="https://x.com/heliumsolana_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo-white.png"
            alt="X Icon"
            className="w-5 h-5 mr-2"
          />
          Follow on X
        </a>
      </div>

      <div className="footer">🎈 No roadmap. No promises. Just vibes.</div>
    </div>
  );
}
