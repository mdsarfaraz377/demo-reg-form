
import './App.css';
import {useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  });

  function changeHandler(event){
    const {name, value, checked, type} =event.target
    setFormData( (prev) => 
          ({...prev, 
            [name]:type === "checkbox" ? checked: value
          }) 
        );
  }

  function submitHandler(event){
    event.preventDefault()
    console.log("Finally printing the value of the form Data")
    console.log(formData)
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form  onSubmit={submitHandler}>
        <label htmlFor='firstName'>FIrst Name</label>
        <br/>
          <input 
            type="text"
            id="firstName"
            placeholder='Md'
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
          <br/>
          <label htmlFor='lastName'>Last Name</label>
          <br/>
          <input
            type="text"
            id="lastName"
            placeholder='Sarfaraz'
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />
          <br/>
          <label htmlFor='email'>Email address</label>
          <br/>
          <input 
            type="text"
            id="email"
            placeholder='abc@gmail.com'
            onChnage={changeHandler}
            name="email"
            value={formData.email}
           />
           <br/>
           <label htmlFor='outline'>Country</label>
           <br/>
           <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="outline"
           >
           <option>India</option>
           <option>USA</option>
           <option>Canada</option>
           <option>Mexico</option>
           </select>
           <br/>
           <label htmlFor='street'>Street address</label>
           <br/>
           <input
             type="text"
             placeholder='BTM Layout'
             id="streetAddress"
             name="streetAddress"
             value={formData.streetAddress}
             onChange={changeHandler}
             className="outline"
            />
            <br/>
            <label htmlFor='city'>City</label>
            <br/>
            <input
              type="text"
              placeholder='Bangalore'
              id="city"
              name="city"
              value={formData.city}
              onChange={changeHandler}
              className="outline"
            />
            <br/>
            <label htmlFor='State/Province'></label>
            <br/>
            <input
             type="text"
             placeholder='Karnataka'
             id="state"
             name="state"
             value={formData.state}
             onChange={changeHandler}
             className="outline"
            />
            <br/>
            <label htmlFor='ZIP/Postal code'></label>
            <br/>
            <input
              type="text"
              placeholder='560076'
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={changeHandler}
              className="outline"
            />
            <br/>
            <br/>
            <fieldset>
                <legend>By Email</legend>

                <div className='flex'>
                  <input
                    type="checkbox"
                    id="comments"
                    name="comments"
                    checked={formData.comments}
                    onChange={changeHandler}
                  />
                  <div>
                    <label htmlFor="comments">Comments</label>
                    <p>Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>

                <div className='flex'>
                  <input
                     type="checkbox"
                     id="candidates"
                     name="candidates"
                     checked={formData.candidates}
                     onChange={changeHandler}
                  />
                  <div>
                    <label htmlFor="candidates">candidates</label>
                    <p>Get notified when a candidate applies for a job.</p>
                  </div>
                </div>

                <div className='flex'>
                  <input
                   type="checkbox"
                   id="offers"
                   name="offers"
                   checked={formData.checked}
                   onChange={changeHandler}
                  />
                  <div>
                    <label htmlFor="offers">offers</label>
                    <p>Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
            </fieldset>
            <br/>
            <br/>
            <fieldset>
                <legend>Push Notifications</legend>
                <p>These are delivered via SMS to your mobile phone.</p>

              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />

              <label htmlFor="pushEverything">Everything</label>

              <br/>
              <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              />

              <label htmlFor="pushEmail">Same as email</label>

              <br/>
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
              />

              <label htmlFor="pushNothing">No Push Notifications</label>

            </fieldset>



            <button
                className="bg-blue-500 text-white font-bold rounded py-2 px-4"
            >
              Save
            </button>

             
      </form>
    </div>
  );
}

export default App;
