

const Avatar = () => {
  const photoUrl = "https://www.w3schools.com/howto/img_avatar.png";

  const description = "This is a photo of a person";

  const height = "200px";
  const wight = "200px";

 const today = new Date();

 const getDay = (date) => { 
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date)
  }


  return (
    <div>
      <p>Today is {getDay(today)}</p>
     <img width={wight} height={height} src={photoUrl} alt={description} />
      
    </div>
  )
}

export default Avatar
