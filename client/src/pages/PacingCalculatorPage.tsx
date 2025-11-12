import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Bike, PersonStanding } from "lucide-react";

type RaceDistance = "sprint" | "standard" | "70.3" | "ironman";

interface PaceResult {
  targetPace: string;
  percentOfLT2: string;
  description: string;
}

interface PowerResult {
  targetPower: string;
  percentOfFTP: string;
  description: string;
}

export default function PacingCalculatorPage() {
  // Unit selection
  const [unit, setUnit] = useState<"km" | "miles">("km");
  
  // Running calculator state
  const [runningRaceDistance, setRunningRaceDistance] = useState<RaceDistance>("standard");
  const [runningLT1Pace, setRunningLT1Pace] = useState("");
  const [runningLT2Pace, setRunningLT2Pace] = useState("");
  
  // Cycling calculator state
  const [cyclingRaceDistance, setCyclingRaceDistance] = useState<RaceDistance>("standard");
  const [cyclingFTP, setCyclingFTP] = useState("");

  const calculateRunningPace = (): PaceResult | null => {
    if (!runningLT1Pace || !runningLT2Pace) return null;
    
    // Convert mm:ss to total seconds
    const parseTime = (time: string): number | null => {
      const parts = time.split(':');
      if (parts.length !== 2) return null;
      const minutes = parseInt(parts[0]);
      const seconds = parseInt(parts[1]);
      if (isNaN(minutes) || isNaN(seconds)) return null;
      return minutes * 60 + seconds;
    };

    const formatTime = (totalSeconds: number): string => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.round(totalSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const lt1Seconds = parseTime(runningLT1Pace);
    const lt2Seconds = parseTime(runningLT2Pace);
    
    if (!lt1Seconds || !lt2Seconds) return null;

    let targetSeconds: number;
    let percentOfLT2: number;
    let description: string;

    switch (runningRaceDistance) {
      case "sprint":
        // LT2 pace (10k race effort)
        targetSeconds = lt2Seconds;
        percentOfLT2 = 100;
        description = "Sprint distance: Run at your LT2 pace (10k race effort). This is sustainable for 30-40 minutes.";
        break;
      case "standard":
        // 95-98% of LT2
        targetSeconds = lt2Seconds * 1.02; // Slightly slower than LT2
        percentOfLT2 = 98;
        description = "Olympic distance: Run slightly below LT2, about 95-98% of your LT2 pace (close to 10k best).";
        break;
      case "70.3":
        // LT1 pace
        targetSeconds = lt1Seconds;
        percentOfLT2 = 90;
        description = "Half Ironman: Run at your LT1 pace (aerobic threshold), sustainable for the entire half marathon after the bike leg.";
        break;
      case "ironman":
        // LT1 or slightly below
        targetSeconds = lt1Seconds * 1.03; // Slightly slower than LT1
        percentOfLT2 = 88;
        description = "Full Ironman: Run at or below LT1 (marathon pace), typically 88-90% of LT2.";
        break;
    }

    return {
      targetPace: formatTime(targetSeconds),
      percentOfLT2: `${percentOfLT2}%`,
      description
    };
  };

  const calculateCyclingPower = (): PowerResult | null => {
    const ftp = parseFloat(cyclingFTP);
    if (isNaN(ftp) || ftp <= 0) return null;

    let minPercent: number;
    let maxPercent: number;
    let description: string;

    switch (cyclingRaceDistance) {
      case "sprint":
        minPercent = 93;
        maxPercent = 100;
        description = "Sprint distance: Approach LT2 power (95-100% of FTP). Elite athletes can sustain near 100%, most will target 90-95%.";
        break;
      case "standard":
        minPercent = 85;
        maxPercent = 95;
        description = "Olympic distance: Target 85-95% of FTP (near LT2). Adjust lower for less experienced athletes.";
        break;
      case "70.3":
        minPercent = 72;
        maxPercent = 85;
        description = "Half Ironman: Target 72-85% of FTP (close to LT1). Top age-groupers can push near the upper range.";
        break;
      case "ironman":
        minPercent = 60;
        maxPercent = 75;
        description = "Full Ironman: Target 60-75% of FTP (below LT1). Less trained athletes or tough courses require lower percentages.";
        break;
    }

    const minPower = Math.round(ftp * (minPercent / 100));
    const maxPower = Math.round(ftp * (maxPercent / 100));
    const avgPercent = Math.round((minPercent + maxPercent) / 2);

    return {
      targetPower: `${minPower}-${maxPower}W`,
      percentOfFTP: `${minPercent}-${maxPercent}%`,
      description
    };
  };

  const runningResult = calculateRunningPace();
  const cyclingResult = calculateCyclingPower();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Triathlon Pacing Calculator - LT1/LT2 Based | NDR Coaching"
        description="Calculate optimal running pace and cycling power for Sprint, Olympic, 70.3, and Ironman races using your LT1 and LT2 zones. Free science-based pacing calculator."
        keywords="triathlon pacing calculator, LT1 LT2 calculator, Ironman pacing, 70.3 pacing, FTP calculator, race pace calculator"
        path="/pacing-calculator"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calculator className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-testid="text-calculator-title">
                Triathlon Pacing Calculator
              </h1>
              <p className="mt-6 text-lg text-muted-foreground" data-testid="text-calculator-description">
                Calculate optimal race paces using your LT1 and LT2 zones for Sprint, Olympic, 70.3, and Ironman distances
              </p>
            </div>

            <div className="mx-auto max-w-4xl mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-4">
                    <Label htmlFor="unit-selector" className="text-base font-semibold">Distance Unit:</Label>
                    <Select value={unit} onValueChange={(value) => setUnit(value as "km" | "miles")}>
                      <SelectTrigger id="unit-selector" className="w-40" data-testid="select-unit">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="km">Kilometers (km)</SelectItem>
                        <SelectItem value="miles">Miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="running" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="running" className="flex items-center gap-2" data-testid="tab-running">
                  <PersonStanding className="h-4 w-4" />
                  Running
                </TabsTrigger>
                <TabsTrigger value="cycling" className="flex items-center gap-2" data-testid="tab-cycling">
                  <Bike className="h-4 w-4" />
                  Cycling
                </TabsTrigger>
              </TabsList>

              <TabsContent value="running">
                <Card>
                  <CardHeader>
                    <CardTitle>Running Pace Calculator</CardTitle>
                    <CardDescription>
                      Enter your LT1 (aerobic threshold) and LT2 (lactate threshold) paces to calculate optimal race pace
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="race-distance-run">Race Distance</Label>
                      <Select value={runningRaceDistance} onValueChange={(value) => setRunningRaceDistance(value as RaceDistance)}>
                        <SelectTrigger id="race-distance-run" data-testid="select-race-distance-run">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sprint">
                            Sprint ({unit === "km" ? "5km / 3.1 miles" : "3.1 miles / 5km"})
                          </SelectItem>
                          <SelectItem value="standard">
                            Standard/Olympic ({unit === "km" ? "10km / 6.2 miles" : "6.2 miles / 10km"})
                          </SelectItem>
                          <SelectItem value="70.3">
                            70.3/Half Ironman ({unit === "km" ? "21.1km / 13.1 miles" : "13.1 miles / 21.1km"})
                          </SelectItem>
                          <SelectItem value="ironman">
                            Full Ironman ({unit === "km" ? "42.2km / 26.2 miles" : "26.2 miles / 42.2km"})
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lt1-pace">LT1 Pace (min:sec per {unit === "km" ? "km" : "mile"})</Label>
                        <Input
                          id="lt1-pace"
                          placeholder={unit === "km" ? "5:00" : "8:00"}
                          value={runningLT1Pace}
                          onChange={(e) => setRunningLT1Pace(e.target.value)}
                          data-testid="input-lt1-pace"
                        />
                        <p className="text-xs text-muted-foreground">
                          Format: MM:SS (e.g., {unit === "km" ? "5:00 for 5 min/km" : "8:00 for 8 min/mile"})
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lt2-pace">LT2 Pace (min:sec per {unit === "km" ? "km" : "mile"})</Label>
                        <Input
                          id="lt2-pace"
                          placeholder={unit === "km" ? "4:30" : "7:15"}
                          value={runningLT2Pace}
                          onChange={(e) => setRunningLT2Pace(e.target.value)}
                          data-testid="input-lt2-pace"
                        />
                        <p className="text-xs text-muted-foreground">
                          Format: MM:SS (e.g., {unit === "km" ? "4:30 for 4:30 min/km" : "7:15 for 7:15 min/mile"})
                        </p>
                      </div>
                    </div>

                    {runningResult && (
                      <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Target Race Pace</h3>
                        <div className="space-y-3">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-primary" data-testid="text-target-pace">
                              {runningResult.targetPace}
                            </span>
                            <span className="text-lg text-muted-foreground">per {unit === "km" ? "km" : "mile"}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            ({runningResult.percentOfLT2} of LT2)
                          </p>
                          <p className="text-foreground mt-4" data-testid="text-pace-description">
                            {runningResult.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cycling">
                <Card>
                  <CardHeader>
                    <CardTitle>Cycling Power Calculator</CardTitle>
                    <CardDescription>
                      Enter your FTP (Functional Threshold Power / LT2) to calculate optimal race power
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="race-distance-bike">Race Distance</Label>
                      <Select value={cyclingRaceDistance} onValueChange={(value) => setCyclingRaceDistance(value as RaceDistance)}>
                        <SelectTrigger id="race-distance-bike" data-testid="select-race-distance-bike">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sprint">Sprint (20km bike)</SelectItem>
                          <SelectItem value="standard">Standard/Olympic (40km bike)</SelectItem>
                          <SelectItem value="70.3">70.3/Half Ironman (90km bike)</SelectItem>
                          <SelectItem value="ironman">Full Ironman (180km bike)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ftp">FTP (Functional Threshold Power)</Label>
                      <Input
                        id="ftp"
                        type="number"
                        placeholder="250"
                        value={cyclingFTP}
                        onChange={(e) => setCyclingFTP(e.target.value)}
                        data-testid="input-ftp"
                      />
                      <p className="text-xs text-muted-foreground">Enter your FTP in watts (e.g., 250)</p>
                    </div>

                    {cyclingResult && (
                      <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Target Race Power</h3>
                        <div className="space-y-3">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-primary" data-testid="text-target-power">
                              {cyclingResult.targetPower}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            ({cyclingResult.percentOfFTP} of FTP)
                          </p>
                          <p className="text-foreground mt-4" data-testid="text-power-description">
                            {cyclingResult.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mx-auto max-w-4xl mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>How to Find Your LT1 and LT2</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    <strong className="text-primary">LT1 (Aerobic Threshold):</strong> The intensity where lactate begins to accumulate, correlating to marathon pace or Ironman/70.3 pace for most athletes.
                  </p>
                  <p className="text-foreground">
                    <strong className="text-primary">LT2 (Anaerobic Threshold):</strong> The intensity where lactate rapidly accumulates, roughly corresponding to your 10k pace or sprint/Olympic triathlon pace.
                  </p>
                  <p className="text-foreground">
                    While you can estimate these zones through field tests (20-minute FTP test for cycling, 30-minute run test), professional lactate testing provides the most accurate results.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a href="/lactate-testing" className="inline-block">
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate active-elevate-2" data-testid="button-lactate-testing">
                        Learn About Lactate Testing
                      </button>
                    </a>
                    <a href="/booking" className="inline-block">
                      <button className="px-4 py-2 bg-card border border-border rounded-md hover-elevate active-elevate-2" data-testid="button-book-consultation">
                        Book Free Consultation
                      </button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
