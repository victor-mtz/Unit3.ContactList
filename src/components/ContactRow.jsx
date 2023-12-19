export function ContactRow({ name, email, phone, setSelectedUserId, id }) {
  return (
    <tr onClick={() => setSelectedUserId(id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}
