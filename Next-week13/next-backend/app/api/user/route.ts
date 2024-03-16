import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client =new PrismaClient();

export async function GET(){
    const res=await client.user.findFirst()
    return Response.json({
        name : res?.username,
        password : res?.password
    })
}

export async function POST(req:NextRequest){
    const body=await req.json();
    // const headers=req.headers.get("authorization")
    // const query=req.nextUrl.searchParams.get("name")
    try{
        await client.user.create({
            data:{
                username : body.username,
                password : body.password
            }
        })
        console.log(body)
        return NextResponse.json({
            body,
             message : "signed up"
        })
    }
    catch(e){
        return NextResponse.json({
            message : "error"
        },{
            status:411
        })
    }
}