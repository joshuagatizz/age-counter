// eslint-disable-next-line react/prop-types
export default function ModifierForm({birthDate, editBirthDate}) {

  const updateDate = (event) => {
    const now = new Date();
    if (new Date(event.target.value) > now) {
      alert("Please select a date no later than the current date.");
      return;
    }
    editBirthDate(event.target.value);
  }

  return (
    <>
      <label htmlFor="birthDate">New Birthdate:</label>
      <input
        type="date"
        id="birthDate"
        className="mt-4 ml-4 rounded"
        value={birthDate.toISOString().split('T')[0]}
        onChange={updateDate}
      />
    </>
  )
}