import './Bmi.css'
import { useState,useEffect } from 'react'

export default function Bmi() {

  const [weight, setweight] = useState("")
  const [height, setheight] = useState("")
  const [bmi, setbmi] = useState()
  const [catageori, setcatageori] = useState("")









  function submit(event) {
    setbmi(parseFloat(weight) / (parseFloat(height) * parseFloat(height)));

    console.log(weight, height, bmi);


  }
  function refresh() {
    setbmi("")
    setheight("")
    setweight("")

    console.log(bmi);

  }


  function n_weight(event) {

    setweight(event.target.value)
    console.log(event.target.value);


  }

  // here is the combined function
  function Combined_fun() {
    // the main reason of usign the combined function is that  we cannot use onlcik event more than one times
    submit()
    // setCat()
  }
  // ok here we set catagroies set which will tell us about more about the 

  function setCat(event) {

    if (isNaN(bmi) || bmi <= 0) {
      setcatageori("Invalid input");
    } else if (bmi < 18.5) {
      setcatageori("Underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setcatageori("Normal Weight");
    } else if (bmi >= 25 && bmi < 30) {
      setcatageori("Overweight");
    } else if (bmi >= 30) {
      setcatageori("Obesity");
    }


  }

  useEffect(() => {
    setCat();
  }, [bmi]); // Only runs when bmi changes



  return (

    <div className="main_body">

      <div className='main_box'>
        <h1>BMI</h1>

        <div className='input_values'>


          <label htmlFor="#">Enter the weight in kg</label>

          <input type="text" placeholder=' weight in kg;' value={weight} onChange={(e) => n_weight(e)} /><br />

          {/*  there are two ways here as above we can set a function or directly set the value as shown setheight(e.target.value.value) */}
          <br />
          <label htmlFor="#">Enter the height in m</label>
          <input type="text" placeholder='height in m......' value={height} onChange={(e) => setheight(e.target.value)} /><br />
          <button className='submit' onClick={Combined_fun} >Submit</button> <br />
          <button className='refresh' onClick={refresh}>refresh</button>


        </div>
        <p> Your BMI is: {bmi}</p> <br />

        <p className='catagory'> you are :{catageori}</p>




      </div>

    </div>


  )
}

