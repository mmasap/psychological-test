import classNames from 'classnames';
import { useState, useEffect } from 'react';

type FadeOutProps = {
  duration?: number;
  delay?: number;
  transition_none?: boolean;
  fadeOutCallback?: () => void;
};

const FadeArea: React.FC<FadeOutProps> = ({
  duration = 1500,
  delay = 0,
  transition_none = true,
  children,
  fadeOutCallback,
}) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    if (fadeOutCallback) {
      const timeout = setTimeout(fadeOutCallback, duration + delay);
      return () => clearTimeout(timeout);
    }
  }, [duration, delay, fadeOutCallback]);

  return (
    <div
      className={classNames({
        'transition-opacity': true,
        'transition-none': transition_none,
        'opacity-0': !fade,
        'opacity-100': fade,
      })}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeArea;
