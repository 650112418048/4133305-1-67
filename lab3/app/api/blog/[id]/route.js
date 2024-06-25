export function GET(request,{ params }){
    return Response.json({
        name:"Natchapong",
        major: "IT",
        lv: "3",
        id: params.id
    });
}