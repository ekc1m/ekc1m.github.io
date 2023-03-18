import React, { useState, useEffect } from 'react';

function AgeCounter() {
  const [age, setAge] = useState(calculateAge());

  function calculateAge() {
    const birthdate = new Date('1997-04-11');
    const now = new Date();
    const diff = now.getTime() - birthdate.getTime();
    const age = diff / (1000 * 60 * 60 * 24 * 365.25);
    return age.toFixed(8);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>I'm <span className='age_counter'>{age}</span> years old</div>;
}

export default AgeCounter;
