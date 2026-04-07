import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { demografi, scores } = body;
    console.log("BODY:", body); // 👈 lihat ini di Vercel

    const Result = await prisma.testResult.create({
      data: {
        name: demografi.name,
        Age: demografi.age,
        Gender: demografi.gender,
        Marriage: demografi.marriage,
        Job: demografi.job,
        JumlahCase: demografi.jumlahcase,
        Lamakerja: demografi.lamakerja,
        Scores: scores,
      },
    });
    return NextResponse.json(Result);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Gagal Simpan" }, { status: 500 });
  }
}


export async function GET() {
  try{
    const result = await prisma.testResult.findMany({
      orderBy: {
        CreatedAtt: "desc",
      },
    });
    return NextResponse.json(result);
  }catch(err){
    console.error("ERROR GET RESULT:", err);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500
    })
  }
}

