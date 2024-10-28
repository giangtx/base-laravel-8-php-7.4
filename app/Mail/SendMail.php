<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $newPassword;
    protected $storeName;
    protected $producerName;
    protected $listEmails;
    protected $managerPhoneNumber;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($newPassword, $storeName, $producerName, $listEmails, $managerPhoneNumber)
    {
        //
        $this->newPassword = $newPassword;
        $this->storeName = $storeName;
        $this->producerName = $producerName;
        $this->listEmails = $listEmails;
        $this->managerPhoneNumber = $managerPhoneNumber;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('sendMailOtp')
                    ->subject("test");
    }
}
