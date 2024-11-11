import LoginButton from "@/components/layout/LoginButton";

export default async function Home() {
  return (
    <div>
      <h3>Landing page</h3>

      <div>
        <p>Welcome to Bug Tracker</p>
        <div>---------------</div>
        <LoginButton />
      </div>
    </div>
  );
}
