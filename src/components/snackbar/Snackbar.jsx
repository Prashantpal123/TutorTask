import { useEffect } from "react"
import { CheckCircle, AlertCircle, AlertTriangle, X } from "lucide-react"

const Snackbar = ({ 
  open, 
  message, 
  type = "success", 
  onClose,
  duration = 3000 
}) => {

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [open])

  if (!open) return null

  const styles = {
    success: {
      bg: "bg-green-600",
      icon: <CheckCircle size={20} />,
    },
    error: {
      bg: "bg-red-600",
      icon: <AlertCircle size={20} />,
    },
    warning: {
      bg: "bg-yellow-500 text-black",
      icon: <AlertTriangle size={20} />,
    },
  }

  return (
    <div className="fixed top-5 right-5 md:top-15 md:right-35 z-50 animate-slideIn">
      
      <div className={`
        flex items-center gap-3
        ${styles[type].bg}
        text-white
        px-4 py-3
        rounded-lg
        shadow-lg
        min-w-65
      `}>

        {styles[type].icon}

        <p className="flex-1 text-sm font-medium">
          {message}
        </p>

        <button onClick={onClose}>
          <X size={18} />
        </button>

      </div>

    </div>
  )
}

export default Snackbar