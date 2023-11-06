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
        firstName: messageDetails.firstName,
        lastName: messageDetails.lastName,
        email: messageDetails.email,
        telephone: messageDetails.telephone,
        message: messageDetails.message,
        donate: messageDetails.donate,
        selection: messageDetails.selection
      }
    )

  }




  return (
    <div className="text-zinc-700">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="fname">First Name:</label><br />
            <input 
              type="text" 
              id="fname" 
              name="fname" 
              className="textInput" 
              required 
              value={messageDetails.firstName} 
              onChange={e => setMessageDetails({ ...messageDetails, firstName: e.target.value })}>
            </input>
            <br />
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label><br />
            <input 
              type="text" 
              id="lname" 
              name="lname" 
              className="textInput" 
              required 
              value={messageDetails.lastName} 
              onChange={e => setMessageDetails({ ...messageDetails, lastName: e.target.value })}>
            </input>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={messageDetails.email} 
              onChange={e => setMessageDetails({ ...messageDetails, email: e.target.value })}>
            </input>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label><br />
            <input 
              type="tel" 
              id="tel" 
              name="tel" 
              required 
              value={messageDetails.telephone} 
              onChange={e => setMessageDetails({ ...messageDetails, telephone: e.target.value })}>
            </input>
          </div>
        </div>

        <div>
          <label>Subject:</label><br />
          <select 
            value={messageDetails.selection} 
            onChange={e => setMessageDetails({ ...messageDetails, selection: e.target.value })} 
            required
          >
            <option value="Choose Subject">Choose Subject</option>
            <option value="Order Status">Order Status</option>
            <option value="Feedback">Feedback</option>
            <option value="Product Question">Product Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Message:</label><br />
          <textarea 
            name="message" 
            rows="10" 
            cols="50" 
            required 
            placeholder="Write something..." 
            value={messageDetails.message} 
            onChange={e => setMessageDetails({ ...messageDetails, message: e.target.value })}>
          </textarea>
        </div>

        <div>
          <button className="btn">Submit</button>
        </div>


      </form>
    </div>
  )
}

export default InputForm 