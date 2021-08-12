import { Response, } from "https://deno.land/x/oak/mod.ts";


let colors : string[] = ["yellow","blue"];

export const getColors = ({ response }: { response: Response }) => {
  response.body = {
    message: "Sucessful Query",
    colors,
  };
};


export const createColor = async ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {

   colors.push(params.id)
    response.status = 200;
    response.body = {
    message: "New Color Created",
    colors,
    }
};

