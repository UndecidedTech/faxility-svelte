<script lang="ts" module>
import { Icon } from "svelte-icons-pack";
import { FaSolidHouseUser, FaSolidDollarSign, FaSolidHouse, FaSolidFilePen } from "svelte-icons-pack/fa";
import { RiBuildingsBankFill, RiDocumentBookOpenFill } from "svelte-icons-pack/ri";
import { BsTools } from "svelte-icons-pack/bs";
import { TrFillAlertOctagon } from "svelte-icons-pack/tr";

</script>

<div class="grid h-40 grid-cols-3 gap-4 p-4">
  <div class="flex h-40 flex-col items-center justify-center bg-orange-400">
    <Icon src={FaSolidHouseUser} size={100} />
    <!-- <FaHouseUser size={100} /> -->
    <span class="font-bold">Apartments</span>
  </div>
  <div class="flex h-40 flex-col items-center justify-center bg-blue-500">
    <Icon src={FaSolidHouse} size={100} />
    <!-- <FaHouse size={100} /> -->
    <span class="font-bold">Turns</span>
  </div>

  <div class="flex h-40 flex-col items-center justify-center bg-purple-400">
    <Icon src={RiBuildingsBankFill} size={100} />
    <!-- <GiCapitol size={100} /> -->
    <span class="font-bold">Capital Building</span>
  </div>

  <div class="flex h-40 flex-col items-center justify-center bg-red-500">
    <Icon src={TrFillAlertOctagon} size={100} />

    <span class="font-bold">Emergency Calls</span>
  </div>

  <div class="flex h-40 flex-col items-center justify-center bg-amber-400">
    <Icon src={RiDocumentBookOpenFill} size={100} />
    <span class="font-bold">Masterbook</span>
  </div>

  <div class="flex h-40 flex-col items-center justify-center bg-green-400">
    <Icon src={FaSolidDollarSign} size={100} />

    <span class="font-bold">Vendors & Supplies</span>
  </div>

  <a
    href="/work-orders"
    class="flex h-40 flex-col items-center justify-center bg-stone-400"
  >
    <Icon src={BsTools} size={100} />

    <span class="font-bold">Work Orders</span>
  </a>

  <button class="flex h-40 flex-col items-center justify-center bg-lime-300">
    <Icon src={FaSolidFilePen} size={100} />

    <span class="font-bold">Notepad</span>
  </button>
</div>

