<script lang="ts">
	export let lastWeekPercentage: number;
	export let title: string;
	export let total: string;
	import DownArrow from '$lib/assets/downarrow.png';
	import UpArrow from '$lib/assets/uparrow.png';
</script>

<div
	class="h-[173px] p-6 rounded-2xl border border-[#eaeaea] flex-col justify-end items-start gap-[25px] inline-flex overflow-hidden"
>
	<div class="w-[223px] justify-between items-start inline-flex">
		<div class="flex-col justify-start items-start gap-[15px] inline-flex">
			<div class="text-[#050e16] text-sm font-medium font-['Almarena Neue'] leading-[16.80px]">
				{title}
			</div>
			<div
				class="w-20 text-[#050e16] text-4xl font-semibold font-['Almarena Neue'] capitalize leading-[44px]"
			>
				{total}
			</div>
		</div>
		<div data-svg-wrapper class="relative">
			{#if lastWeekPercentage > 0}
				<svg
					width="67"
					height="43"
					viewBox="0 0 67 43"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_17110_2750)">
						<rect width="67" height="43" rx="8" fill="url(#paint0_linear_17110_2750)" />
						<path
							d="M0.0248875 43C0.0248875 35.4132 -0.478878 30.9875 3.04632 29.7231C6.57152 28.4586 8.45467 34.0644 12.6142 32.252C16.7737 30.4396 12.8761 23.8628 16.7737 22.0512C20.6714 20.2396 23.0996 27.1184 25.7071 25.2975C28.3146 23.4765 23.3685 13.1772 28.3146 12.044C33.2607 10.9108 33.5726 32.0584 39.2077 31.249C44.8428 30.4396 41.0076 19.0343 46.4502 19.0343C51.8928 19.0343 52.3973 30.8811 55.9302 30.4396C59.4631 29.9981 60.0519 17.9306 62.1128 16.9004C64.1737 15.8703 66.4112 18.1513 67 18.1513"
							stroke="#30A341"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_17110_2750"
							x1="-3.10474e-07"
							y1="34"
							x2="67"
							y2="9.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#F3F3F3" />
							<stop offset="1" stop-color="white" />
						</linearGradient>
						<clipPath id="clip0_17110_2750">
							<rect width="67" height="43" rx="8" fill="white" />
						</clipPath>
					</defs>
				</svg>
			{:else}
				<svg
					width="67"
					height="43"
					viewBox="0 0 67 43"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_17110_2750)">
						<rect width="67" height="43" rx="8" fill="url(#paint0_linear_17110_2750)" />
						<path
							d="M66.9751 0C66.9751 7.58679 67.4789 12.0125 63.9537 13.2769C60.4285 14.5414 58.5453 8.93557 54.3858 10.748C50.2263 12.5604 54.1239 19.1372 50.2263 20.9488C46.3286 22.7604 43.9004 15.8816 41.2929 17.7025C38.6854 19.5235 43.6315 29.8228 38.6854 30.956C33.7393 32.0892 33.4274 10.9416 27.7923 11.751C22.1572 12.5604 25.9924 23.9657 20.4498 23.9657C14.9072 23.9657 14.4027 12.1189 10.8698 12.5604C7.33688 13.0019 6.74812 25.0694 4.68719 26.0996C2.62626 27.1297 0.388853 24.8487 0 24.8487"
							stroke="#FF0000"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_17110_2750"
							x1="-3.10474e-07"
							y1="34"
							x2="67"
							y2="9.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#F3F3F3" />
							<stop offset="1" stop-color="white" />
						</linearGradient>
						<clipPath id="clip0_17110_2750">
							<rect width="67" height="43" rx="8" fill="white" />
						</clipPath>
					</defs>
				</svg>
			{/if}
		</div>
	</div>
	<div class="w-[162px] relative">
		<div data-svg-wrapper class="left-0 top-0 absolute">
			{#if lastWeekPercentage > 0}
				<img src={UpArrow} alt="up arrow" />
			{:else if lastWeekPercentage < 0}
				<img src={DownArrow} alt="down arrow" />
			{:else}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
						fill="#35AB43"
					/>
				</svg>
			{/if}
		</div>
		<div
			class={lastWeekPercentage > 0
				? "w-[200px] left-[32px] top-[1px] absolute text-[#34ab42] text-base font-semibold font-['Nunito Sans']"
				: "w-[200px] left-[32px] top-[1px] absolute text-[#f05154] text-base font-semibold font-['Nunito Sans']"}
		>
			{lastWeekPercentage}% Last Week
		</div>
	</div>
</div>
