'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PaymentDialog from './payment-dialog'

interface TicketDialogProps {
  isOpen: boolean
  onClose: () => void
  event: any | null
}

export default function TicketDialog({ isOpen, onClose, event }: TicketDialogProps) {
  const [selectedTicket, setSelectedTicket] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [showPayment, setShowPayment] = useState(false)

  const handlePurchase = () => {
    const ticket = event.tickets.find((t: any) => t.id === selectedTicket)
    setShowPayment(true)
  }

  const handleClose = () => {
    setSelectedTicket('')
    setQuantity('1')
    setShowPayment(false)
    onClose()
  }

  if (!event) return null

  const selectedTicketData = event.tickets.find((t: any) => t.id === selectedTicket)

  return (
    <>
      <Dialog open={isOpen && !showPayment} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Purchase Tickets</DialogTitle>
          <DialogDescription>
            {event.title} - {event.time}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="ticket-type">Ticket Type</Label>
            <Select
              value={selectedTicket}
              onValueChange={setSelectedTicket}
            >
              <SelectTrigger id="ticket-type">
                <SelectValue placeholder="Select ticket type" />
              </SelectTrigger>
              <SelectContent>
                {event.tickets.map((ticket: any) => (
                  <SelectItem key={ticket.id} value={ticket.id}>
                    {ticket.type} - ${ticket.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          {selectedTicket && (
            <div className="text-right text-sm text-muted-foreground">
              Total: ${event.tickets.find((t: any) => t.id === selectedTicket)?.price * Number(quantity)}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handlePurchase} disabled={!selectedTicket}>
            Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

      {showPayment && (
        <PaymentDialog
          isOpen={showPayment}
          onClose={() => {
            setShowPayment(false)
            handleClose()
          }}
          event={event}
          selectedTickets={{
            type: selectedTicketData?.type || '',
            quantity: Number(quantity),
            price: selectedTicketData?.price || 0
          }}
        />
      )}
    </>
  )
}
