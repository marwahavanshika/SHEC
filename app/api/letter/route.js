import excuteQuery from "../../../database";

export async function POST(req,res){
    try {
        let body = await req.json()
        const values = Object.values(body)
      const result = await excuteQuery({
          query: 'INSERT INTO Newsletter(`Email`) VALUES(?)',
          values:[values],
      });
      console.error(result);
      if(result.error!==undefined){
        return new Response("Error",{status:500})
      } else {
        return new Response("Done",{status:200});
      }
    } catch (error) {
        console.log(error); 
        return new Response("Error",{status:500})
    } 
}