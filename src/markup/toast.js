import logo from '../assets/images/Phoria-Logo_YBBG.png'
export const getToast = (message, emoji = '😊') => (
`<div class="flex items-center justify-between bg-secondary2 py-2 md:py-4 pl-4 pr-8 md:px-12 space-x-4 rounded relative">
   <img alt="Phoria Logo" src="${logo}" class="w-8 md:w-12 h-8 md:h-12 rounded-full flex-shrink-0"/>
   <p class="font-bold text-sm md:text-lg">${message}</p>
   <span>${emoji}</span>
   <button class="absolute top-2 right-2 text-gray-300 hover:text-white">
      <i class="material-icons text-sm">close</i>
   </button>
</div>`
)

