import { Link } from 'react-router-dom';

function Event({ data }) {
  return (
    <div className='
    flex flex-col 
    p-2
    rounded-md 
    shadow-lg shadow-slate-700 
    w-full
    bg-slate-200/40
    relative
    m-auto
    ' 
    >

      <Link className='Card-title' to={`/events/${data.id}`}>
        {console.log(data)}
        <h1 className='bg-slate-200/70 rounded-md p-1 text-left text-2xl font-semibold left-0 top-0 m-0'>
          {data.title}
        </h1>
      </Link>
      <p>{data.desc}</p>
      <p>{data.location}</p>
      <p>{Date(data.date)}</p>
      <p>{data.host}</p>
      <div className='absolute font-semibold text-right inline-block bg-slate-200/70 rounded-md right-0 bottom-0'>
        <div>{data.address}</div>
        <div>{data.hours}</div>
      </div>
    </div>
  )
}

export default Event;