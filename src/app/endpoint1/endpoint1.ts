
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface GenerationMixEntry {
  fuel: string;
  perc: number;
}

interface DayEnergyData {
  from: string;
  to: string;
  generationmix: GenerationMixEntry[];
  cleanEnergyPercent: number;
}

interface ApiResponse {
  data: DayEnergyData[];
}

@Component({
  selector: 'app-root1',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './endpoint1.html',
  styleUrls: ['./endpoint1.css']
})
export class Endpoint1 implements OnInit {
  title = 'energy-data-demo';

  days: DayEnergyData[] = [];
  loading = false;
  error: string | null = null;

  private readonly apiUrl = 'http://localhost:8080/v1/codibly/getData';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.error = null;

    this.http.get<ApiResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.days = res.data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load data';
        this.loading = false;
      }
    });
  }
}

