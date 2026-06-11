/*
<label htmlFor="name">Username:</label>
<input
  type="text"
  id="name"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  name="username"
  placeholder="Classic-John"
  className="form-input"
  required
/>
<p className="error-message" id="username-error">
  Username already taken
</p>



  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*");

      if (error) {
        console.log("Error getting Profiles" ,error);
      } else {
        setProfiles(data);
      }
    };

    fetchProfiles();
  }, []);

  
  const [profiles, setProfiles] = useState([]);
*/
