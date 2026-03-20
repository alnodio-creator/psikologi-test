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
import { Textarea } from "@/components/ui/textarea";
import { SyntheticEvent, useState } from "react";
import { Brain } from "lucide-react";

const StatusMarriages = [
  "Belum Menikah",
  "Menikah",
  "Cerai Hidup",
  "Cerai Mati",
];

const UsiaResponden = [
  "< 26 tahun",
  "26 - 35 tahun",
  "36 - 45 tahun",
  "46 - 55 tahun",
  "> 56 Tahun",
];

const jenisJabatan = [
  { label: "Advokat", value: "advokat" },
  { label: "Konselor hukum", value: "konselor_hukum" },
  { label: "Paralegal", value: "paralegal" },
  { label: "Mediator", value: "mediator" },
  { label: "Konselor", value: "konselor" },
  { label: "Psikolog Klinis", value: "psikolog_klinis" },
  { label: "Manajer Kasus", value: "manajer_kasus" },
  { label: "Pekerja Sosial", value: "pekerja_sosial" },
  { label: "Penerima Pengaduan (Operator)", value: "operator" },
];

interface TestLandingProps {
  onStart: () => void;
}

const DemografiForm = ({ onStart }: TestLandingProps) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [marriage, setMarriage] = useState("");
  const [job, setJob] = useState("");

  const HandleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!phone) return alert("isi phone terlebih dahulu")
    if (!name) return alert("isi name terlebih dahulu")
    if (!gender) return alert("isi gender terlebih dahulu")
    if (!age) return alert("isi age terlebih dahulu")
    if (!marriage) return alert("isi marriage terlebih dahulu")
    if (!job) return alert("isi job terlebih dahulu")
    onStart()
  }
  

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
                    onChange={((e) => setName(e.target.value))}
                      id="checkout-7j9-card-name-43j"
                      placeholder="Masukkan Nama Anda"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Nomor Telepon
                    </FieldLabel>
                    <Input
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // hapus selain angka
                        if (value.length <= 12) {
                          setPhone(value);
                        }
                      }}
                      placeholder="081xxxxxxxxx"
                      required
                    />
                    <FieldDescription>Masukan Nomor Telepon</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>Jenis Kelamin</FieldLabel>
                    <Select required
                    value={gender}
                    onValueChange={((value) => setGender(value))}>
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
                    <FieldDescription>Pilih Jenis Kelamin</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel>Usia Anda</FieldLabel>
                    <Select required
                    value={age}
                    onValueChange={((value) => setAge(value))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Usia Anda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="z-900">
                          <SelectLabel>Pilih Usia Anda</SelectLabel>
                          {UsiaResponden.map((value, index) => (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                      <FieldDescription>Pilih Usia Anda</FieldDescription>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Status Pernikahan</FieldLabel>
                    <Select required
                    value={marriage}
                    onValueChange={((value) => setMarriage(value))}>
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
                      <FieldDescription>
                        Pilih Status Pernikahan
                      </FieldDescription>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>Jenis Jabatan</FieldLabel>
                    <Select required
                    value={job}
                    onValueChange={((value) => setJob(value))}>
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
                      <FieldDescription>
                        Pilih Jenis Jabatan Anda
                      </FieldDescription>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Comments
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-optional-comments"
                      placeholder="Add any additional comments"
                      className="resize-none"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button 
                type="submit">
                  Submit
                </Button>
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
