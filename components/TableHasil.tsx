import { getResult } from "@/lib/getResult";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
 

const Tablehasil = async () => {
  const Results = await getResult();
  const ButtonResult = ({ href }: { href: string }) => {
    return(
      <Link href={href}>
        <Button className="bg-blue-500 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 focus:outline-none">
        Lihat Hasil
        </Button>
      </Link>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Data Pengisi Formulir Web
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Berikut adalah hasil dari test yang telah Anda lakukan.
        </p>
      </div>
      {/* Table */}
      <div className="w-full max-w-4xl overflow-x-auto">
        <Card className="bg-white shadow-lg  rounded-xl animate-scaleIn border-0 p-10">
          <Table>
            <TableCaption className="text-center text-lg font-bold text-muted-foreground">
              Data Pengisi Formulir Web
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-muted rounded-4xl">
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Pekerjaan</TableHead>
                <TableHead>Tanggal Input</TableHead>
                <TableHead>Hasil</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Results.map((result, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{result.name}</TableCell>
                    <TableCell>{result.Job}</TableCell>
                    <TableCell>
                      {new Date(result.CreatedAtt).toLocaleDateString()}
                    </TableCell>
                    <TableCell><ButtonResult href={`/Result/${result.id}`} /></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Tablehasil;
