<script>
    import { onMount } from 'svelte';

    // State management
    let currentDate = new Date();
    let selectedView = 'week'; // day, week, month, year
    let events = [
        {
            id: 1,
            title: 'Monday Wake-Up Hour',
            start: '8:00 AM',
            color: 'sky',
            day: 'MON',
            location: '740 Residences'
        },
        {
            id: 2,
            title: 'Coffee Chat',
            start: '9:00 AM',
            color: 'sky',
            day: 'WED',
            location: ''
        },
        // Add more events as needed
    ];

    let hours = Array.from({length: 11}, (_, i) => ({
        hour: i + 7,
        label: `${i + 7}${(i + 7) >= 12 ? 'PM' : 'AM'}`
    }));

    let weekDays = [
        { short: 'SUN', long: 'Sunday', date: 21 },
        { short: 'MON', long: 'Monday', date: 22 },
        { short: 'TUE', long: 'Tuesday', date: 23 },
        { short: 'WED', long: 'Wednesday', date: 24 },
        { short: 'THU', long: 'Thursday', date: 25 },
        { short: 'FRI', long: 'Friday', date: 26 },
        { short: 'SAT', long: 'Saturday', date: 27 }
    ];

    function setView(view) {
        selectedView = view;
    }

    function addEvent(timeSlot, day) {
        // Implement event addition logic
        console.log(`Adding event at ${timeSlot} on ${day}`);
    }

    function handleDrop(event, timeSlot, day) {
        // Implement drag and drop logic
        console.log(`Dropped event at ${timeSlot} on ${day}`);
    }

    function navigateWeek(direction) {
        // Implement week navigation
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + (direction * 7));
        currentDate = newDate;
        updateWeekDays();
    }

    function updateWeekDays() {
        // Update the weekDays array based on currentDate
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        
        weekDays = weekDays.map((day, index) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + index);
            return {
                ...day,
                date: date.getDate()
            };
        });
    }

    // ... (previous script code remains the same)

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

    // ... (rest of the script code remains the same)
</script>

<div class="my-12">
    <div class="w-[1140px] h-[904px] relative">
        <div class="w-[1140px] h-[904px] p-4 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <!-- View selection buttons -->
            <div class="self-stretch justify-between items-center inline-flex">
                <div class="justify-start items-start flex">
                    {#each ['Day', 'Week', 'Month', 'Year'] as view}
                        <div class="justify-start items-start flex">
                            <button 
                                class="px-4 py-1.5 rounded-lg justify-start items-center gap-2 flex"
                                class:bg-[#eb6f20]={selectedView.toLowerCase() === view.toLowerCase()}
                                on:click={() => setView(view.toLowerCase())}
                            >
                                <div class="text-sm font-medium font-['Inter'] leading-tight"
                                    class:text-white={selectedView.toLowerCase() === view.toLowerCase()}
                                    class:text-zinc-500={selectedView.toLowerCase() !== view.toLowerCase()}>
                                    {view}
                                </div>
                            </button>
                        </div>
                    {/each}
                </div>

                <!-- Task Type Filter -->
                <div class="pl-5 pr-3.5 py-3 bg-white rounded-[100px] border border-[#eb6f20]/30 justify-start items-center gap-2 flex">
                    <select class="w-[177px] text-[#3d424c] text-sm font-semibold font-['Almarena Neue'] leading-tight bg-transparent border-none outline-none">
                        <option>All Task Types</option>
                        <option>Meetings</option>
                        <option>Appointments</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>

            <!-- Calendar Grid -->
            <div class="w-[1124px] h-[0px] border border-[#eaeaea]"></div>
            <div class="flex-col justify-start items-start flex">
                <!-- Week header -->
                <div class="w-[1108px] pl-12 justify-start items-start gap-3 inline-flex">
                    {#each weekDays as day}
                        <div class="w-[144.57px] px-2 pt-1 pb-4 {day.short === 'SUN' || day.short === 'SAT' ? 'bg-neutral-50' : 'bg-white'} 
                                    shadow-[inset_-1px_-1px_0px_0px_rgba(224,224,224,1.00)] flex-col justify-start items-start inline-flex">
                            <div class="self-stretch text-zinc-500 text-[10px] font-bold font-['Inter'] leading-3">{day.short}</div>
                            <div class="self-stretch text-black text-[22px] font-medium font-['Inter'] leading-loose">{day.date}</div>
                        </div>
                    {/each}
                    <div class="w-12 text-zinc-500 text-xs font-normal font-['Inter'] leading-none">EST<br/>GMT-5</div>
                </div>

                <!-- Time slots -->
                {#each hours as {hour, label}}
                    <div class="w-[1156px] justify-start items-start gap-3 inline-flex">
                        <div class="w-9 text-zinc-500 text-xs font-normal font-['Inter'] leading-none">{label}</div>
                        <div class="self-stretch justify-start items-start flex">
                            {#each weekDays as day}
                                <!-- Time slot cell -->
                                <div 
                                    class="w-[144.57px] bg-{day.short === 'THU' ? 'blue-50' : day.short === 'SUN' || day.short === 'SAT' ? 'neutral-50' : 'white'} 
                                        shadow-[inset_-1px_-1px_0px_0px_rgba(224,224,224,1.00)] flex-col justify-start items-start inline-flex"
                                    on:click={() => addEvent(label, day.short)}
                                    on:dragover|preventDefault
                                    on:drop|preventDefault={(e) => handleDrop(e, label, day.short)}
                                >
                                    <div class="self-stretch h-9 shadow-[inset_0px_-1px_0px_0px_rgba(247,247,247,1.00)]"></div>
                                    <div class="self-stretch h-9"></div>
                                </div>
                            {/each}
                        </div>
                        <div class="w-9 text-zinc-500 text-xs font-normal font-['Inter'] leading-none">{label}</div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Event cards -->
        {#each events as event}
            <!-- Render event cards with proper positioning based on time and day -->
            <div class="absolute" style="left: {getEventPosition(event)}px; top: {getEventTop(event)}px;">
                <div class="w-[143px] h-[68px] bg-{event.color}-500/10 rounded justify-start items-start inline-flex overflow-hidden">
                    <div class="w-[3px] self-stretch bg-{event.color}-500"></div>
                    <div class="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
                        <div class="self-stretch justify-start items-center gap-1 inline-flex">
                            <div class="text-{event.color}-700 text-xs font-medium font-['Inter'] leading-none">{event.start}</div>
                        </div>
                        <div class="self-stretch text-{event.color}-700 text-xs font-semibold font-['Inter'] leading-none">{event.title}</div>
                    </div>
                </div>
            </div>
        {/each}
    </div>

</div>

<style>
    /* Add any additional styles here */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
</style>