<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // State management
    let currentDate = new Date();
    let selectedView = 'week';
    let selectedDate = null;

    // Sample events with more metadata
    let events = [
        {
            id: 1,
            title: 'Monday Wake-Up Hour',
            start: '8:00 AM',
            end: '9:00 AM',
            color: 'sky',
            day: 'MON',
            location: '740 Residences',
            description: 'Morning routine and planning',
            attendees: ['John Doe', 'Jane Smith']
        },
        {
            id: 2,
            title: 'Coffee Chat',
            start: '9:00 AM',
            end: '10:00 AM',
            color: 'emerald',
            day: 'WED',
            location: 'Starbucks Downtown',
            description: 'Weekly team catch-up',
            attendees: ['Alice Johnson']
        }
    ];

    // Modify the hours array to include half-hours
    let hours = Array.from({length: 24}, (_, i) => {
        const hour = Math.floor(i/2) + 7;
        const isHalfHour = i % 2 === 1;
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return {
            hour,
            minutes: isHalfHour ? '30' : '00',
            label: isHalfHour ? '' : `${displayHour}:00 ${period}`
        };
    });

    let weekDays = [
        { short: 'SUN', long: 'Sunday', date: null },
        { short: 'MON', long: 'Monday', date: null },
        { short: 'TUE', long: 'Tuesday', date: null },
        { short: 'WED', long: 'Wednesday', date: null },
        { short: 'THU', long: 'Thursday', date: null },
        { short: 'FRI', long: 'Friday', date: null },
        { short: 'SAT', long: 'Saturday', date: null }
    ];

    // Event handling functions
    function handleEventClick(event) {
        // Show event details modal
        console.log('Event clicked:', event);
    }

    function handleTimeSlotClick(hour, minutes, day) {
        console.log(`Creating event at: ${hour}:${minutes}`, day);
    }

    function navigateWeek(direction) {
        currentDate.setDate(currentDate.getDate() + (direction * 7));
        currentDate = new Date(currentDate);
        updateWeekDays();
    }

    function updateWeekDays() {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        
        weekDays = weekDays.map((day, index) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + index);
            return {
                ...day,
                date: date.getDate(),
                isToday: isSameDay(date, new Date())
            };
        });
    }

    function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    // Initialize calendar
    onMount(() => {
        updateWeekDays();
    });

    // Constants for layout calculations
    const COLUMN_WIDTH = 144.57; // Width of each day column
    const LEFT_PADDING = 209; // Initial left padding
    const DAY_POSITIONS = {
        'SUN': 0,
        'MON': 1,
        'TUE': 2,
        'WED': 3,
        'THU': 4,
        'FRI': 5,
        'SAT': 6
    };

    function getEventPosition(event) {
        // Calculate horizontal position based on the day of the event
        const dayIndex = DAY_POSITIONS[event.day];
        
        // Position = initial padding + (column width × day index)
        const position = LEFT_PADDING + (COLUMN_WIDTH * dayIndex);
        
        return position;
    }

    function getEventTop(event) {
        // Convert event time to pixels
        const [hours, minutes] = event.start.split(':');
        const hour = parseInt(hours);
        const isPM = event.start.includes('PM');
        
        // Convert to 24-hour format
        const militaryHour = isPM && hour !== 12 ? hour + 12 : hour;
        
        // Each hour is 72px height (two 36px rows)
        const hourHeight = 72;
        const startHour = 7; // Calendar starts at 7 AM
        
        // Calculate top position based on time
        const topPosition = ((militaryHour - startHour) * hourHeight) + 172; // 172px is initial top padding
        return topPosition;
    }

    function getEventColor(color) {
        // Implement logic to determine event color
        return color;
    }

    function getEventHour(time) {
        // Implement logic to extract hour from time format
        const [hours, minutes] = time.split(':');
        return parseInt(hours);
    }

    function getEventMinutes(timeString) {
        const [time] = timeString.split(' ');
        const [, minutes] = time.split(':');
        return minutes;
    }
</script>

<div class="calendar-container bg-white rounded-xl shadow-lg p-6">
    <!-- Calendar Header -->
    <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-4">
            <button 
                class="p-2 hover:bg-gray-100 rounded-full transition-colors"
                on:click={() => navigateWeek(-1)}
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <h2 class="text-xl font-semibold">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <button 
                class="p-2 hover:bg-gray-100 rounded-full transition-colors"
                on:click={() => navigateWeek(1)}
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>

        <div class="flex gap-2">
            {#each ['Day', 'Week', 'Month'] as view}
                <button 
                    class="px-4 py-2 rounded-lg transition-colors"
                    class:bg-primary-100={selectedView === view.toLowerCase()}
                    class:text-primary-600={selectedView === view.toLowerCase()}
                    on:click={() => selectedView = view.toLowerCase()}
                >
                    {view}
                </button>
            {/each}
        </div>
    </div>

    <!-- Calendar Grid -->
    <div class="calendar-grid">
        <!-- Days Header -->
        <div class="grid grid-cols-8 gap-0 border-b border-gray-200">
            <div class="w-20 p-2 border-r border-gray-200"></div>
            {#each weekDays as day, i}
                <div class="text-center p-2 {day.isToday ? 'bg-primary-50' : ''} {i !== weekDays.length - 1 ? 'border-r border-gray-200' : ''}">
                    <div class="text-sm text-gray-500">{day.short}</div>
                    <div class="text-xl font-semibold {day.isToday ? 'text-primary-600' : ''}">{day.date}</div>
                </div>
            {/each}
        </div>

        <!-- Time Slots -->
        {#each hours as {hour, minutes, label}, hourIndex}
            <div class="grid grid-cols-8 gap-0 {hourIndex !== hours.length - 1 ? 'border-b border-gray-100' : ''}">
                <div class="text-sm text-gray-500 p-2 border-r border-gray-200 h-[36px]">
                    {label}
                </div>
                {#each weekDays as day, dayIndex}
                    <div 
                        class="h-[36px] p-1 hover:bg-gray-50 transition-colors cursor-pointer {dayIndex !== weekDays.length - 1 ? 'border-r border-gray-200' : ''} relative"
                        on:click={() => handleTimeSlotClick(hour, minutes, day)}
                    >
                        <!-- Event slots -->
                        {#each events.filter(e => e.day === day.short && 
                            getEventHour(e.start) === hour && 
                            getEventMinutes(e.start) === minutes) as event}
                            <div
                                transition:fade
                                class="absolute inset-0 m-1 p-2 rounded-lg text-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                                style="background-color: {getEventColor(event.color)}20; border-left: 3px solid {getEventColor(event.color)}"
                                on:click|stopPropagation={() => handleEventClick(event)}
                            >
                                <div class="font-semibold truncate">{event.title}</div>
                                <div class="text-xs text-gray-600 truncate">{event.start} - {event.end}</div>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .calendar-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .calendar-grid {
        overflow-y: auto;
        max-height: 800px;
    }

    /* Custom scrollbar styles */
    .calendar-grid::-webkit-scrollbar {
        width: 8px;
    }

    .calendar-grid::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    .calendar-grid::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    .calendar-grid::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>