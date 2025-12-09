import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface LoadingWindowResponse {
  from: string;
  to: string;
  cleanEnergyPercent: number;
}

@Component({
  selector: 'app-root2',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './endpoint2.html',
  styleUrls: ['./endpoint2.css']
})
export class Endpoint2 {
  title = 'loading-window-demo';

  // bound to <input type="number">
  windowHours: number | null = null;

  result: LoadingWindowResponse | null = null;
  loading = false;
  error: string | null = null;

  private readonly baseUrl = 'https://codibly-1-z7h0.onrender.com/getLoadingWindow';

  constructor(private http: HttpClient) {}

  fetchWindow(): void {
    this.error = null;
    this.result = null;

    if (this.windowHours == null || isNaN(this.windowHours)) {
      this.error = 'Please enter a valid number.';
      return;
    }

    this.loading = true;
    const url = `${this.baseUrl}/${this.windowHours}`;

    this.http.get<LoadingWindowResponse>(url).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load data from API.';
        this.loading = false;
      }
    });
  }
}