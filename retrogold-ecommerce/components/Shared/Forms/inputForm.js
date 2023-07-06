//inputForm for Appointment section
import React, { useState } from 'react'


const InputForm = () => {
  const [messageDetails, setMessageDetails] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      message: '',
      donate: '',
      selection: '',
    }
  )




  const handleSubmit = (event) => {
    event.preventDefault()

    setMessageDetails(
      {
        firstName:messageDetails.firstName,
        lastName:messageDetails.lastName,
        email:messageDetails.email,
        telephone:messageDetails.telephone,
        message:messageDetails.message,
        donate:messageDetails.donate,
        selection: messageDetails.selection
      }
    )

  }
  

  

  return (
    <div >
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="fname">First Name:</label><br/>
            <input type="text" id="fname" name="fname" required value={messageDetails.firstName} onChange={e =>setMessageDetails({...messageDetails, firstName:e.target.value}) }></input><br/>
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label><br/>
            <input type="text" id="lname" name="lname" required value={messageDetails.lastName} onChange={e =>setMessageDetails({...messageDetails, lastName:e.target.value}) }></input>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required value={messageDetails.email} onChange={e =>setMessageDetails({...messageDetails, email:e.target.value}) }></input>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label><br/>
            <input type="tel" id="tel" name="tel" required value={messageDetails.telephone} onChange={e =>setMessageDetails({...messageDetails, telephone:e.target.value}) }></input>
          </div>
        </div>

        <div>
          <label>Subject:</label><br/>
          <select value={messageDetails.selection} onChange={e => setMessageDetails({...messageDetails, selection:e.target.value})} required>
            <option value="Choose Subject">Choose Subject</option>
            <option value="Health">Health</option>
            <option value="Relationships">Relationships</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div>
          <label>Message:</label><br/>
          <textarea name="message" maxlength="200" rows="10" cols="50" required placeholder="Write something..." value={messageDetails.message} onChange={ e =>setMessageDetails({...messageDetails, message:e.target.value}) }></textarea>
        </div>

        <div>
          <label>Donate:</label><br/>
          <div className="flex flex-row gap-2">
          <p className="text-2xl font-bold">$</p>
          <input type="number" name="donate" value={messageDetails.donate} onChange={ e =>setMessageDetails({...messageDetails, donate:e.target.value}) } min="5"/>
          </div>
        </div>

        <div>
          <button className="btn">Add to Cart</button>
        </div>


      </form>
    </div>
  )
}

export default InputForm 