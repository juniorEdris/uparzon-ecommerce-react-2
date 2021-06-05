import React, { useEffect } from 'react';

function BackToTop() {
  useEffect(() => {
    // get on top of the page after page loads
    window.scrollTo(0, 0);
    // get on top of the page after clicking scroll button
    const scrollTop = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTop.classList.remove('not-visible');
      } else {
        scrollTop.classList.add('not-visible');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
      // scrollTop.removeEventListener('click',()=>{});
    };
  }, []);
  const headToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="back_to_top">
      {/* <span className="flat-btn" onClick={headToTop}>
        Back to Top
      </span> */}
      <div className="scroll-top not-visible" onClick={headToTop}>
        <span class="lnr lnr-arrow-up"></span>
      </div>
    </div>
  );
}

export default React.memo(BackToTop);
