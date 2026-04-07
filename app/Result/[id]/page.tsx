import { HasilTabel } from "@/components/HasilTabel";
import { Card } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { CheckCircle2 } from "lucide-react";

const ResultDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data = await prisma.testResult.findUnique({
    where: {
      id: Number(id),
    },
  });

  const SScores: number[] = Array.isArray(data?.Scores)
    ? (data.Scores as number[])
    : [];

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-blue-100 overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-linear-to-r from-primary to-accent shadow-lg animate-pulse">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Your Results
        </h1>
        <p className="text-lg text-muted-foreground">
          Assessment completed successfully
        </p>
      </div>
      <Card className="w-full max-w-4xl mx-auto mt-5 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Detail Hasil Tes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm">
          <p>
            <span className="font-semibold">Nama:</span> {data?.name}
          </p>
          <p>
            <span className="font-semibold">Umur:</span> {data?.Age}
          </p>

          <p>
            <span className="font-semibold">Jenis Kelamin:</span> {data?.Gender}
          </p>
          <p>
            <span className="font-semibold">Status Pernikahan:</span>{" "}
            {data?.Marriage}
          </p>

          <p>
            <span className="font-semibold">Pekerjaan:</span> {data?.Job}
          </p>
          <p>
            <span className="font-semibold">Lama Kerja:</span> {data?.Lamakerja}
          </p>

          <p className="md:col-span-2">
            <span className="font-semibold">Rata-rata Kasus Ditangani:</span>{" "}
            {data?.JumlahCase}
          </p>

          <p className="md:col-span-2">
            <span className="font-semibold">Tanggal Tes:</span>{" "}
            {new Date(data?.CreatedAtt || "").toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </Card>
      <HasilTabel scores={SScores} />
    </div>
  );
};

export default ResultDetail;
