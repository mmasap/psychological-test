import classNames from 'classnames';
import { useState, useEffect } from 'react';

type FadeOutTextProps = {
  duration?: number;
  delay?: number;
  transition_none?: boolean;
};

const FadeOutText: React.FC<FadeOutTextProps> = ({
  duration = 1000,
  delay = 0,
  transition_none = true,
  children,
}) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <p
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
    </p>
  );
};

export default FadeOutText;
