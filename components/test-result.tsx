"use client";

import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface TestResultsProps {
  scores: number[];
  onRetake: () => void;
}

export function TestResults({ scores, onRetake }: TestResultsProps) {
  const totalScore = scores.reduce((a, b) => a + b, 0);

  // Determine score interpretation
  const getInterpretation = (value: number) => {
    if (value <= 22)
      return {
        level: "Rendah",
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        description:
          "Anda mungkin sedang mengalami tantangan yang cukup signifikan. Pertimbangkan untuk mencari dukungan dari tenaga profesional kesehatan mental.",
      };
    if (value <= 41)
      return {
        level: "Sedang",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        description:
          "Anda menunjukkan beberapa area yang perlu diperhatikan. Mengembangkan strategi coping (penanganan) yang sehat dapat memberikan manfaat.",
      };
    return {
      level: "Tinggi",
      color: "text-green-600",
      bgColor: "bg-green-100",
      description:
        "Anda menunjukkan resiliensi psikologis yang kuat serta kesejahteraan mental yang baik di berbagai aspek.",
    };
  };

  const interpretation = getInterpretation(totalScore);

  // Prepare chart data
  const chartData = scores.map((score, index) => ({
    name: `${index + 1}`,
    score: score,
  }));

  const categoryScores = [
    {
      name: "Burnout",
      value:
        scores[0] +
        scores[2] +
        scores[5] +
        scores[7] +
        scores[11] +
        scores[12] +
        scores[13] +
        scores[14] +
        scores[17] +
        scores[19],
    },
    {
      name: "Secondary Traumatic Stress",
      value:
        scores[1] +
        scores[3] +
        scores[4] +
        scores[6] +
        scores[8] +
        scores[9] +
        scores[10] +
        scores[15] +
        scores[16] +
        scores[18],
    },
  ];

  const BurnoutScores =
    categoryScores.find((item) => item.name === "Burnout")?.value || 0;
  const STSScores =
    categoryScores.find((item) => item.name === "Secondary Traumatic Stress")
      ?.value || 0;

  const BurnoutLevel = getInterpretation(BurnoutScores);
  const STSLevel = getInterpretation(STSScores);

  const COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-linear-to-r from-background via-blue-50 to-blue-100">
      <div className="w-full max-w-4xl space-y-8 animate-fadeInUp">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-linear-to-r from-primary to-accent shadow-lg animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            CARE 129 <br /> Hasil Asesment
          </h1>
          <p className="text-lg text-muted-foreground">
            Berikut adalah hasil dari assesmen yang telah Anda lakukan
          </p>
        </div>

        {/* Main Visualization */}
        <Card className="px-6 py-10 shadow-lg border-0 bg-white rounded-xl">
          <h2 className="text-2xl text-center font-bold text-foreground mb-6">
            Distribusi Nilai Pertanyaan
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                label={{
                  value: "Pertanyaan",
                  angle: 0,
                  position: "bottom",
                  offset: 10,
                  style: {
                    textAnchor: "middle",
                    fill: "#6b7280",
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                }}
              />
              <YAxis
                stroke="#6b7280"
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                label={{
                  value: "Score Pertanyaan",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fill: "#6b7280",
                    fontSize: 15,
                    fontWeight: "bold",
                  },
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => `${value} points`}
              />
              <Bar
                dataKey="score"
                fill="url(#gradientBar)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Breakdown and Pie Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Scores */}
          <Card className="p-6 shadow-lg border-0 bg-white rounded-xl">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Rincian Kategori
            </h3>
            <div className="space-y-3">
              {categoryScores.map((category, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {category.name}
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {category.value}/50
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-accent"
                      style={{ width: `${(category.value / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-sm text-muted-foreground mt-4 italic">
              <b>* Burnout:</b> Kelelahan fisik dan mental akibat stres berkepanjangan,
              biasanya karena pekerjaan.<br />
              <b>* Secondary Traumatic Stress:</b> Stres yang dialami akibat terpapar
              pengalaman traumatis orang lain.
            </h3>
          </Card>

          {/* Pie Chart */}
          <Card className="p-6 shadow-lg border-0 bg-white rounded-xl flex items-center justify-center">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              Distribusi Kategori
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryScores}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} points`} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Interpretation Card */}
          <Card
            className={`p-6 shadow-lg border-0 rounded-xl text-center ${BurnoutLevel.bgColor}`}
          >
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              Burnout Score
            </p>
            <p className={`text-5xl font-bold ${BurnoutLevel.color}`}>
              {BurnoutLevel.level}
            </p>
            <p className="text-xs text-foreground/70 mt-2">
              Berdasarkan dari jawaban Anda
            </p>
          </Card>

          {/* Interpretation Card */}
          <Card
            className={`p-6 shadow-lg border-0 rounded-xl text-center ${STSLevel.bgColor}`}
          >
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              Secondary Traumatic Stress Score
            </p>
            <p className={`text-5xl font-bold ${STSLevel.color}`}>
              {STSLevel.level}
            </p>
            <p className="text-xs text-foreground/70 mt-2">
              Berdasarkan dari jawaban Anda
            </p>
          </Card>
        </div>

        {/* Interpretation Section */}
        <Card
          className={`p-8 shadow-lg border-0 rounded-xl ${interpretation.bgColor}`}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Interpretasi Hasil:
            </h3>
            <p className="text-base text-foreground leading-relaxed">
              {interpretation.description}
            </p>
            <div className="pt-2 border-t border-border/50">
              <p className="text-xs text-muted-foreground italic">
                * Penilaian ini hanya untuk refleksi diri dan tidak dimaksudkan
                untuk menggantikan evaluasi kesehatan mental oleh profesional.
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={onRetake}
            size="lg"
            className="bg-linear-to-r from-primary to-accent hover:shadow-lg text-white px-8"
          >
            Ulangi Tes
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Bagikan Hasil
          </Button>
        </div>
      </div>
    </div>
  );
}
