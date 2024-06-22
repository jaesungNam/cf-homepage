export default function Home() {
  return (
    <div>
    <div style={{fontFamily: 'My Font', fontWeight: 500}}>
      qqwwefew
    </div>
      <div>
        <div>
          <button onClick={() => {
            fetch('https://target.overpowerman.click/api/user', {method: 'GET'})
          }}>get
          </button>
          <button onClick={() => {
            fetch('https://target.overpowerman.click/api/user', {
              method: 'POST', headers: {
                "Content-Type": "application/json",
              }, body: JSON.stringify({user: 1})
            })
          }}>post
          </button>
          <button onClick={() => {
            fetch('https://target.overpowerman.click/api/user', {
              method: 'PUT', headers: {
                "Content-Type": "application/json",
              }, body: JSON.stringify({user: 1})
            })
          }}>put
          </button>
          <button onClick={() => {
            fetch('https://target.overpowerman.click/api/user', {method: 'DELETE'})
          }}>get
          </button>
        </div>
      </div>
    </div>
  );
}
