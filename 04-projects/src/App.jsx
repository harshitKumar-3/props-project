import Card from '../components/card'


const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://applescoop.org/image/story/76316045115487008-10311484136811093.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/ce/b3/ed/ceb3ed2c5164d73a601536f934711983.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/825/original/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.tBxqXYGufdbsXBFIzBRm-wHaHa?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.NF9pXP4AlXPqSgrCBRhnsQHaHa?pid=Api&P=0&h=180",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Node.js Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    datePosted: "5 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
           <Card companyName={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted} location={elem.location}/> 
          </div>
      })}
  </div>
  )
}

export default App
 