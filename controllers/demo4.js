// export const getGithubDetails = async (req, res) => {
//     const { username } = req.params;
//     const API = https://api.github.com/users/${username};
  
//     try {
//       const response = await axios.get(API);
//       res.status(200).json(response.data);
//     } catch (error) {
//       res.status(400).json({
//         message: "Error fetching github details",
//         success: false,
//       });
//     }
//   };