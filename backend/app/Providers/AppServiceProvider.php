<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Foundation\MaintenanceMode;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(MaintenanceMode::class, function () {
            return new class implements MaintenanceMode {
                public function active(): bool
                {
                    return false;
                }

                public function time(): ?\DateTimeInterface
                {
                    return null;
                }

                public function context(): array
                {
                    return [];
                }

                public function activate(array $payload): void
                {
                    // noop
                }

                public function deactivate(): void
                {
                    // noop
                }

                public function data(): array
                {
                    return [];
                }
            };
        });
    }

    public function boot(): void
    {
        // Leave empty or add boot logic
    }
}
