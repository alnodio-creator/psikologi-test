"use client";

import { Card } from "./ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SyntheticEvent, useState } from "react";
import { Brain } from "lucide-react";
import { useTestStore } from "@/store/setScore";

const StatusMarriages = [
  "Belum Menikah",
  "Menikah",
  "Cerai Hidup",
  "Cerai Mati",
];

const jenisJabatan = [
  { label: "Advokat", value: "advokat" },
  { label: "Konselor hukum", value: "konselor hukum" },
  { label: "Paralegal", value: "paralegal" },
  { label: "Konselor", value: "konselor" },
  { label: "Psikolog Klinis", value: "psikolog klinis" },
  { label: "Manajer Kasus", value: "manajer kasus" },
  { label: "Pekerja Sosial", value: "pekerja sosial" },
  { label: "Penerima Pengaduan (Operator)", value: "operator" },
];

const lamaBekerja = [
  { label: "< 1 tahun", value: "kurang dari 1 tahun" },
  { label: "1-2 tahun", value: "12 tahun" },
  { label: "3-5 tahun", value: "35 tahun" },
  { label: "> 5 tahun", value: "lebih dari 5 tahun" },
];

const jumlahCase = [
  { label: "< 5 kasus", value: "<5" },
  { label: "5-10 kasus", value: "5-10" },
  { label: "10-15 kasus", value: "10-15" },
  { label: "> 20 kasus", value: ">20" },
];

interface TestLandingProps {
  onStart: () => void;
}

const DemografiForm = ({ onStart }: TestLandingProps) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [marriage, setMarriage] = useState("");
  const [job, setJob] = useState("");
  const [lamakerja, setLamakerja] = useState("");
  const [jumlahcase, setJumlahcase] = useState("");

  const setDemografiForm = useTestStore((state) => state.setDemografi);

  const HandleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!name) return alert("isi name terlebih dahulu");
    if (!gender) return alert("isi gender terlebih dahulu");
    if (!age) return alert("isi age terlebih dahulu");
    if (!marriage) return alert("isi marriage terlebih dahulu");
    if (!job) return alert("isi job terlebih dahulu");
    if (!lamakerja) return alert("isi lamakerja terlebih dahulu");
    if (!jumlahcase) return alert("isi jumlahcase terlebih dahulu");
    setDemografiForm({
      name,
      gender,
      age,
      marriage,
      job,
      lamakerja,
      jumlahcase,
    });

    onStart();
  };

  // const isValid = name && gender && age && marriage && job;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="mb-9">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-linear-to-br from-primary to-accent shadow-lg">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            CARE 129
          </h1>
          <h2 className="text-5xl md:text-2xl font-bold italic text-foreground text-balance leading-tight">
            Lengkapi Data Diri Anda sebelum Melakukan Test
          </h2>
        </div>
      </div>
      <div className="w-full max-w-2xl space-y-6">
        <Card className="bg-white shadow-lg  rounded-xl animate-scaleIn border-0 p-10">
          <form onSubmit={HandleSubmit}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Data Demografi</FieldLegend>
                <FieldDescription>Perkenalkan dirimu disini</FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Nama Lengkap
                    </FieldLabel>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="checkout-7j9-card-name-43j"
                      placeholder="Masukkan Nama Anda"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Jenis Kelamin</FieldLabel>
                    <Select
                      required
                      value={gender}
                      onValueChange={(value) => setGender(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Jenis Kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Pilih Jenis Kelamin</SelectLabel>
                          <SelectItem value="Laki Laki">Laki-laki</SelectItem>
                          <SelectItem value="Perempuan">Perempuan</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Usia Anda
                    </FieldLabel>
                    <Input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      id="checkout-7j9-card-name-43j"
                      placeholder="Masukkan Usia Anda"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Status Pernikahan</FieldLabel>
                    <Select
                      required
                      value={marriage}
                      onValueChange={(value) => setMarriage(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Status Pernikahan Anda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Status Pernikahan</SelectLabel>
                          {StatusMarriages.map((value, index) => {
                            return (
                              <SelectItem key={index} value={value}>
                                {value}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Jenis Jabatan</FieldLabel>
                    <Select
                      required
                      value={job}
                      onValueChange={(value) => setJob(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Jabatan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Pilih Jenis Jabatan</SelectLabel>
                          {jenisJabatan.map((value, index) => {
                            return (
                              <SelectItem key={index} value={value.value}>
                                {value.label}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Lama Bekerja</FieldLabel>
                    <Select
                      required
                      value={lamakerja}
                      onValueChange={(value) => setLamakerja(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Lama Bekerja" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Pilih Lama Bekerja</SelectLabel>
                          {lamaBekerja.map((value, index) => (
                            <SelectItem key={index} value={value.value}>
                              {value.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Rata-rata jumlah kasus yang ditangani dalam 1 bulan</FieldLabel>
                    <Select
                      required
                      value={jumlahcase}
                      onValueChange={(value) => setJumlahcase(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Rata-rata jumlah kasus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Rata-rata jumlah kasus yang ditangani</SelectLabel>
                          {jumlahCase.map((value, index) => (
                            <SelectItem key={index} value={value.value}>
                              {value.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DemografiForm;
