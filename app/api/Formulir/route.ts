import { NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'


export async function POST (req: Request) {
    try{
    const body = await req.json()
    const {demografi, scores} = body
    console.log("BODY:", body); // 👈 lihat ini di Vercel

    const Result = await prisma.testResult.create({
        data: {
        name: demografi.name,
        Phone: demografi.phone,
        Age: demografi.age,
        Gender: demografi.gender,
        Marriage: demografi.marriage,
        Job: demografi.job,
        Scores: scores
        }
    })
    return NextResponse.json(Result)
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Gagal Simpan"}, {status: 500})
    }
    
}