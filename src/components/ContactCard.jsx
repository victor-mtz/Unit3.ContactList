export function ContactCard({ userId, user }) {
  return (
    <div>
      <h4>Name; {user.name}</h4>
      <h4>Email: {user.email}</h4>
      <h4>Phone: {user.phone}</h4>
      <h4>Website: {user.website}</h4>
      <h4>Username: {user.username}</h4>
    </div>
  );
}
