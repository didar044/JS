<?php
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\StudentProfile;
use App\Models\StudentId;

public function registerStudents(array $studentsData)
{
    return DB::transaction(function () use ($studentsData) {

        foreach ($studentsData as $data) {
            // Create student
            $student = Student::create([
                'name'  => $data['name'],
                'email' => $data['email']
            ]);

            // Create profile
            StudentProfile::create([
                'student_id' => $student->id,
                'dob'        => $data['dob'],
                'address'    => $data['address']
            ]);

            // Assign ID
            $uniqueId = 'SID-' . str_pad($student->id, 5, '0', STR_PAD_LEFT);
            StudentId::create([
                'student_id' => $student->id,
                'unique_id'  => $uniqueId
            ]);
        }

        return ['status' => 'success'];
    });
}
