
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
          <h2 className="text-2xl font-bold mb-2">Detail Hasil Tes</h2>
          <p className="mb-2"><strong>Nama:</strong> {data?.name}</p>
          <p className="mb-2"><strong>Umur:</strong> {data?.Age}</p>
          <p className="mb-2"><strong>Umur:</strong> {data?.Marriage}</p>
          <p className="mb-2"><strong>Jenis Kelamin:</strong> {data?.Gender}</p>
          <p className="mb-2"><strong>Pekerjaan:</strong> {data?.Job}</p>
          <p className="mb-2"><strong>Jumlah Rata Rata Kasus yang ditangani :</strong> {data?.JumlahCase}</p>
          <p className="mb-2"><strong>Lama Kerja:</strong> {data?.Lamakerja}</p>
          <p className="mb-2"><strong>Tanggal Tes:</strong> {new Date(data?.CreatedAtt || "").toLocaleDateString()}</p>
        </Card>
          <HasilTabel scores={SScores} />
        </div>
  );
};

export default ResultDetail;

