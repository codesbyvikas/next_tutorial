const ServerComponent = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1>Server Component</h1>

      {/* Buttons with onClick won't work in Server Components */}
      {/* If you need interactivity, use "use client" and a Client Component */}

      <ul className="grid grid-cols-3 gap-5">
        {data.slice(0, 9).map((el: any) => (
          <li key={el.id} className="p-3 border rounded-lg shadow">
            {el.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComponent;
