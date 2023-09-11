import hollow from '../../assets/HeartHollow.svg';
import filled from '../../assets/HeartFull.svg';
import { useState } from 'react';

export default function FavBtn({id, className}) {
  const [liked, setLiked] = useState(false);

//   useEffect(()=>{

//   },[])


  return <div className={className}>{liked ? <img src={filled} alt="in favorites" /> : <img src={hollow} alt="not in favorites" />}</div>;
}
