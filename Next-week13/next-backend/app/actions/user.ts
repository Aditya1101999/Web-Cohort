"use server"

import client from "@/db"
export async function signup(username:string, password: string){
        //const body=await req.json();
        // const headers=req.headers.get("authorization")
        // const query=req.nextUrl.searchParams.get("name")
        try{
            await client.user.create({
                data:{
                    username : username,
                    password : password
                }
            })
            //console.log(body)
            // return NextResponse.json({
            //     body,
            //      message : "signed up"
            // })
            return true
        }
        catch(e){
            // return NextResponse.json({
            //     message : "error"
            // },{
            //     status:411
            // })
            return false
        }
    }