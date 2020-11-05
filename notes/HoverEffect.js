import React, { useState, useRef } from 'react';

function ProjectCard() {
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleProjectCardButton = () => setOpen(!open);

  // Hover effect
  const card = useRef('card');

  const onMouseMove = (e) => {
    const width = card.current.clientWidth;
    const height = card.current.clientHeight;
    const offX = (e.nativeEvent.offsetX / width) * 100;
    const offY = (e.nativeEvent.offsetY / height) * 100;
    // console.log(width, height);
    // console.log(Math.floor(offX), Math.floor(offY));
    setX(offX);
    setY(offY);

    if (offX || offY) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="ProjectCard" ref={card} onMouseMove={(e) => onMouseMove(e)}>
      <div className="ProjectCard-top">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://chargen-client.vercel.app/"
        >
          <h3>Chargen</h3>
        </a>
        <p>A Dungeons and Dragons character sheet manager</p>
        <p>PostgreSQL / Express / React / Node </p>
        <button type="button" onClick={handleProjectCardButton}>
          more info
        </button>
      </div>
      <div className={open ? 'ProjectCard-expanded' : 'ProjectCard-collapsed'}>
        <p>More info</p>
        <p>Live Site</p>
      </div>
    </div>
  );
}

export default ProjectCard;
